import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { nombre, telefono, correo } = body;

    if (!nombre || !telefono || !correo) {
      return NextResponse.json(
        { error: 'Los campos nombre, teléfono y correo son obligatorios.' },
        { status: 400 }
      );
    }

    // In production, this would save to database or send email
    // For now, we just log and return success
    console.log('Quote request received:', {
      nombre,
      telefono,
      correo,
      distrito: body.distrito || '',
      tipoProyecto: body.tipoProyecto || '',
      metrosCubicos: body.metrosCubicos || '',
      mensaje: body.mensaje || '',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Cotización recibida correctamente.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}
